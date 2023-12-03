let select = document.getElementById('course-filter');

select.addEventListener('change', () => {
    let selectedDuration = select.value
    // Get all course elements
    const courses = document.querySelectorAll('.c-list');

    // Show/hide courses based on the selected duration
    courses.forEach(course => {
        console.log(course.id, selectedDuration)
        if (selectedDuration === 'default' || course.id === selectedDuration) {
            course.style.display = 'block';
        } else {
            course.style.display = 'none';
        }
    });
})

