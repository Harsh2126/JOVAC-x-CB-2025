// Debug: Check if script is loading
console.log('Script loaded successfully!');

// DOM Elements
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const showSignupLink = document.getElementById('showSignup');
const showLoginLink = document.getElementById('showLogin');

// Debug: Check if elements are found
console.log('Forms found:', { loginForm, signupForm, showSignupLink, showLoginLink });

// Toggle between forms
showSignupLink.addEventListener('click', (e) => {
    e.preventDefault();
    loginForm.classList.add('hidden');
    signupForm.classList.remove('hidden');
});

showLoginLink.addEventListener('click', (e) => {
    e.preventDefault();
    signupForm.classList.add('hidden');
    loginForm.classList.remove('hidden');
});

// Handle Signup
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('Signup form submitted!'); // Debug log
    
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    console.log('Form values:', { name, email, password, confirmPassword }); // Debug log
    
    // Validation
    if (password !== confirmPassword) {
        showMessage('Passwords do not match!', 'error');
        return;
    }
    
    if (password.length < 6) {
        showMessage('Password must be at least 6 characters!', 'error');
        return;
    }
    
    // Check if user already exists
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    if (users.find(user => user.email === email)) {
        showMessage('User already exists!', 'error');
        return;
    }
    
    // Save user
    users.push({ name, email, password });
    localStorage.setItem('users', JSON.stringify(users));
    
    showMessage('Account created successfully!', 'success');
    signupForm.reset();
    
    // Switch to login
    setTimeout(() => {
        signupForm.classList.add('hidden');
        loginForm.classList.remove('hidden');
    }, 1500);
});

// Handle Login
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    // Check credentials
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        showMessage(`Welcome back, ${user.name}!`, 'success');
        loginForm.reset();
        
        // Simulate redirect to dashboard
        setTimeout(() => {
            alert('Redirecting to dashboard...');
        }, 1500);
    } else {
        showMessage('Invalid email or password!', 'error');
    }
});

// Show message function
function showMessage(message, type) {
    // Remove existing messages
    const existingMessage = document.querySelector('.error, .success');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create new message
    const messageDiv = document.createElement('div');
    messageDiv.className = type;
    messageDiv.textContent = message;
    
    // Add to current form
    const currentForm = signupForm.classList.contains('hidden') ? loginForm : signupForm;
    currentForm.appendChild(messageDiv);
    
    // Remove message after 3 seconds
    setTimeout(() => {
        messageDiv.remove();
    }, 3000);
}

// Add some sample users for testing
if (!localStorage.getItem('users')) {
    const sampleUsers = [
        { name: 'John Doe', email: 'john@example.com', password: '123456' },
        { name: 'Jane Smith', email: 'jane@example.com', password: '123456' }
    ];
    localStorage.setItem('users', JSON.stringify(sampleUsers));
} 