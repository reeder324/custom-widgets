document.addEventListener('DOMContentLoaded', () => {
    const birthDate = new Date('1993-03-24');
    const today = new Date();
    const endDate = new Date('2078-03-24'); // Expected life span of 85 years

    const daysPerRow = 31; // Max number of days in a month
    const daysPerMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // Days in each month

    const gridContainer = document.getElementById('life-grid');

    let currentDate = new Date(birthDate);

    // Fill grid with days
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

    // Adjust grid layout to represent months
    const totalDays = Math.floor((endDate - birthDate) / (1000 * 60 * 60 * 24)) + 1;
    const totalColumns = Math.max(...daysPerMonth); // Use 31 columns as max for layout
    const totalRows = Math.ceil(totalDays / totalColumns);

    gridContainer.style.gridTemplateColumns = `repeat(${totalColumns}, 20px)`;
    gridContainer.style.gridTemplateRows = `repeat(${totalRows}, 20px)`;
});
