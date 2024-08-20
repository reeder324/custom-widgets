document.addEventListener('DOMContentLoaded', () => {
    const birthDate = new Date('1993-03-24');
    const today = new Date();
    const endDate = new Date('2078-03-24'); // Expected life span of 85 years

    const gridContainer = document.getElementById('life-grid');

    // Calculate the number of days in each month
    const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();

    let currentDate = new Date(birthDate);

    // Create grid cells for each day
    while (currentDate <= endDate) {
        const dayElement = document.createElement('div');
        dayElement.className = 'day';

        if (currentDate <= today) {
            dayElement.classList.add('filled');
        }

        gridContainer.appendChild(dayElement);

        // Move to the next day
        currentDate.setDate(currentDate.getDate() + 1);
    }

    // Calculate the number of columns needed
    const totalDays = Math.floor((endDate - birthDate) / (1000 * 60 * 60 * 24)) + 1;
    const maxDaysInMonth = 31; // Max number of days in a month

    // Set grid columns based on maximum number of days in a month
    gridContainer.style.gridTemplateColumns = `repeat(${maxDaysInMonth}, 20px)`;

    // Calculate the number of rows needed
    const totalRows = Math.ceil(totalDays / maxDaysInMonth);
    gridContainer.style.gridTemplateRows = `repeat(${totalRows}, 20px)`;
});
