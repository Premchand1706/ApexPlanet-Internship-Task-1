document.addEventListener('DOMContentLoaded', function() {
    // Login Form Handling
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;
            
            if (email && password) {
                alert('Login successful! Welcome back to FreshHarvest.');
                // In a real app, you would redirect here:
                // window.location.href = 'dashboard.html';
            } else {
                alert('Please fill in all fields');
            }
        });
    }
    
    // Signup Form Handling
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('signupName').value;
            const email = document.getElementById('signupEmail').value;
            const password = document.getElementById('signupPassword').value;
            const confirmPassword = document.getElementById('signupConfirmPassword').value;
            const termsAgreed = document.getElementById('termsAgree').checked;
            
            if (!name || !email || !password || !confirmPassword) {
                alert('Please fill in all fields');
                return;
            }
            
            if (password !== confirmPassword) {
                alert('Passwords do not match');
                return;
            }
            
            if (!termsAgreed) {
                alert('You must agree to the terms and conditions');
                return;
            }
            
            alert('Account created successfully! Welcome to DailyHarvest.');
            // In a real app, you would redirect here:
            // window.location.href = 'login.html';
        });
    }
});