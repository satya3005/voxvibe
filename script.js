document.addEventListener("DOMContentLoaded", () => {
    console.log("Vox Vibe website is ready.");
    // Add your custom JavaScript here for interactions or animations
});
document.addEventListener("DOMContentLoaded", () => {
    const editProfileBtn = document.getElementById('editProfileBtn');
    const saveProfileBtn = document.getElementById('saveProfileBtn');
    const cancelEditBtn = document.getElementById('cancelEditBtn');
    const profileForm = document.getElementById('profileForm');
    const editAddressBtn = document.getElementById('editAddressBtn');
    const saveAddressBtn = document.getElementById('saveAddressBtn');
    const cancelAddressBtn = document.getElementById('cancelAddressBtn');
    const addressForm = document.getElementById('addressForm');

    // Toggle Profile Edit Mode
    editProfileBtn.addEventListener('click', () => {
        toggleForm(profileForm, true);
    });

    cancelEditBtn.addEventListener('click', () => {
        toggleForm(profileForm, false);
    });

    // Toggle Address Edit Mode
    editAddressBtn.addEventListener('click', () => {
        toggleForm(addressForm, true);
    });

    cancelAddressBtn.addEventListener('click', () => {
        toggleForm(addressForm, false);
    });

    function toggleForm(form, isEditing) {
        const inputs = form.querySelectorAll('input');
        inputs.forEach(input => input.disabled = !isEditing);
        form.querySelector('.btn-primary').classList.toggle('d-none', isEditing);
        form.querySelector('.btn-success').classList.toggle('d-none', !isEditing);
        form.querySelector('.btn-secondary').classList.toggle('d-none', !isEditing);
    }
});
