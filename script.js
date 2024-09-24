document.addEventListener('DOMContentLoaded', () => {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const formContainers = document.querySelectorAll('.form-container');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.getAttribute('data-target');
            
            tabBtns.forEach(b => b.classList.remove('active'));
            formContainers.forEach(f => f.classList.remove('active'));
            
            btn.classList.add('active');
            document.getElementById(target).classList.add('active');
        });
    });

    document.getElementById('login-form').addEventListener('submit', (e) => {
        e.preventDefault();
        // Add login logic here
        console.log('Login submitted');
    });

    document.getElementById('register-form').addEventListener('submit', (e) => {
        e.preventDefault();
        // Add registration logic here
        console.log('Registration submitted');
    });
});