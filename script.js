const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
        nav.classList.toggle('open');
    });
}

const budgetForm = document.getElementById('budget-form');

if (budgetForm) {
    const fields = ['food', 'transport', 'school', 'savings', 'other'];

    const money = (amount) => {
        return '₱' + Number(amount || 0).toLocaleString('en-PH', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
    };

    budgetForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const income = Number(document.getElementById('income').value) || 0;
        const values = {};
        let expenses = 0;

        fields.forEach((id) => {
            values[id] = Math.max(
                0,
                Number(document.getElementById(id).value) || 0
            );

            expenses += values[id];
            document.getElementById(id + '-value').textContent = money(values[id]);
        });

        document.getElementById('total-income').textContent = money(income);

        const balance = income - expenses;
        document.getElementById('balance').textContent = money(balance);

        const message = document.getElementById('budget-message');

        if (balance < 0) {
            message.textContent =
                'Your planned expenses are higher than your income. Review your budget.';
            message.style.color = '#b33b35';
        } else if (balance === 0) {
            message.textContent = 'Your budget is balanced.';
            message.style.color = '#16805d';
        } else {
            message.textContent =
                'Great! You have money remaining after your planned expenses.';
            message.style.color = '#16805d';
        }
    });
}

const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();

        document.getElementById('contact-message').textContent =
            'Thank you! Your message has been prepared. ' +
            'This demo form does not send data to a server.';

        contactForm.reset();
    });
}
