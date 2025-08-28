function setCookie(name, value, days) {
  let cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + "; path=/; SameSite=Lax";
  if (typeof days === "number") {
    const exp = new Date(Date.now() + days * 864e5).toUTCString();
    cookie += "; expires=" + exp;
  }
  document.cookie = cookie;
}

function getCookie(name) {
  const key = encodeURIComponent(name) + "=";
  const parts = document.cookie.split(";").map(c => c.trim());
  for (const c of parts) {
    if (c.indexOf(key) === 0) return decodeURIComponent(c.substring(key.length));
  }
  return "";
}

function deleteCookie(name) {
  document.cookie = encodeURIComponent(name) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; SameSite=Lax";
}

function getUsers() {
    try {
      return JSON.parse(localStorage.getItem("users")) || [];
    } catch {
      return [];
    }
  }
  
  function saveUsers(users) {
    localStorage.setItem("users", JSON.stringify(users));
  }
  
  function attachSignup(form) {
    const suUsername = document.getElementById("suUsername");
    const suPassword = document.getElementById("suPassword");
    const suConfirm  = document.getElementById("suConfirm");
    const errorEl    = document.getElementById("signupError");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      errorEl.textContent = "";
  
      const username = suUsername.value.trim();
      const password = suPassword.value;
      const confirm  = suConfirm.value;
  
      if (!username || !password || !confirm) {
        errorEl.textContent = "Please fill in all fields.";
        return;
      }
      if (password.length < 4) {
        errorEl.textContent = "Password must be at least 4 characters (demo).";
        return;
      }
      if (password !== confirm) {
        errorEl.textContent = "Passwords do not match.";
        return;
      }
  
      const users = getUsers();
      if (usernameExists(users, username)) {
        errorEl.textContent = "Username already exists. Choose another.";
        return;
      }

      users.push({ username, password });
      saveUsers(users);
  
      alert("Signup successful! You can login now.");
      window.location.href = "./login.html"; 
    });
  }
  
  function usernameExists(users, name) {
    const n = name.trim().toLowerCase();
    return users.some(u => u.username.toLowerCase() === n);
  }
  
  function attachDeleteUser() {
  const deleteBtn = document.getElementById("deleteUserBtn");
  if (!deleteBtn) return; 
  const deleteUsernameEl = document.getElementById("deleteUsername");
  const deleteErrorEl = document.getElementById("deleteError");

  deleteBtn.addEventListener("click", () => {
    deleteErrorEl.textContent = "";
    const usernameToDelete = deleteUsernameEl.value.trim();
    if (!usernameToDelete) {
      deleteErrorEl.textContent = "Please enter a username to delete.";
      return;
    }
    const users = getUsers();
    const idx = users.findIndex(u => u.username.toLowerCase() === usernameToDelete.toLowerCase());
    if (idx === -1) {
      deleteErrorEl.textContent = "No user found with that username.";
      return;
    }
    users.splice(idx, 1);
    saveUsers(users);
    alert("Deleted successfully!");
    deleteUsernameEl.value = "";
  });
}

  function attachLogin(form) {
    const loginUsernameEl = document.getElementById("loginUsername");
    const loginPasswordEl = document.getElementById("loginPassword");
    const errorEl = document.getElementById("loginError");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      errorEl.textContent = ""; 
  
      const username = loginUsernameEl.value.trim();
      const password = loginPasswordEl.value;
  
      if (!username || !password) {
        errorEl.textContent = "Please enter username and password.";
        return;
      }
  
      const users = getUsers();
      const found = users.find(u => u.username.toLowerCase() === username.toLowerCase() && u.password === password);

      if (found) {
        const remember = document.getElementById("rememberMe")?.checked;

        if (remember) { 
          setCookie("username", found.username, 7);
        } else {
          setCookie("username", found.username); 
        }
          
        sessionStorage.setItem("username", found.username);
        alert("Login successful!");

        const next = sessionStorage.getItem("redirect_after_login") || "./index.html";
        sessionStorage.removeItem("redirect_after_login");
        window.location.href = next;
      } else {
        errorEl.textContent = "Invalid credentials.";
        alert("Account doesn't exist, please sign up first.");
      }

    });
  }

  function toggleHeaderUI() {

  const currentUser = sessionStorage.getItem("username") || getCookie("username");
  const welcomeText = document.getElementById("welcomeText");
  const who         = document.getElementById("who");
  const loginLink   = document.getElementById("loginLink");
  const logoutBtn   = document.getElementById("logoutBtn");

  if (currentUser) {
    if (who) who.textContent = currentUser;
    if (welcomeText) welcomeText.style.display = "inline-block";
    if (logoutBtn)   logoutBtn.style.display   = "inline-block";
    if (loginLink)   loginLink.style.display   = "none";
  } else {
    if (welcomeText) welcomeText.style.display = "none";
    if (logoutBtn)   logoutBtn.style.display   = "none";
    if (loginLink)   loginLink.style.display   = "inline-block";
  }
}

  
window.addEventListener("DOMContentLoaded", () => {
  if (!sessionStorage.getItem("username")) {
    const cookieUser = getCookie("username");
    if (cookieUser) sessionStorage.setItem("username", cookieUser);
  }

  toggleHeaderUI();

  const signupForm = document.getElementById("signupForm");
  const loginForm  = document.getElementById("loginForm");

  if (signupForm) attachSignup(signupForm);
  if (loginForm)  attachLogin(loginForm);
  attachDeleteUser();

  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", function () {
      sessionStorage.removeItem("username");
      deleteCookie("username");
      toggleHeaderUI();
      alert("Successfully logged out!");
      window.location.href = "./logout.html";
    });
  }
});  