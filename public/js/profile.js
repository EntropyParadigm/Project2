//async function newFormHandler(event) {
    //event.preventDefault();
    //const name = document.querySelector('#name').value;
    //const age = document.querySelector('#age').value;
    //const height = document.querySelector('#height').value;
    //const weight = document.querySelector('#weight').value;
    // The following is a ternary operator. It checks to see if workouts is checked. If it is, it will return true, otherwise, it will return false.
    //const has_workouts = document.querySelector('#has_workouts:checked') ? true : false;
    // Send fetch request to add a new workout
function callDatabase {
    const response = await fetch(../api/exerciseRoute.js, {
      method: 'POST',
      body: JSON.stringify({
        name,
        age,
        height,
        weight,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    //if the workout is added, the 'all' template will be rerendered
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to add workout');
    }
}

window.onload = callDatabase;

// const newFormHandler = async (event) => {
//   event.preventDefault();

//   const name = document.querySelector('#project-name').value.trim();
//   const needed_funding = document.querySelector('#project-funding').value.trim();
//   const description = document.querySelector('#project-desc').value.trim();

//   if (name && needed_funding && description) {
//     const response = await fetch(`/api/projects`, {
//       method: 'POST',
//       body: JSON.stringify({ name, needed_funding, description }),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     if (response.ok) {
//       document.location.replace('/profile');
//     } else {
//       alert('Failed to create project');
//     }
//   }
// };

// const delButtonHandler = async (event) => {
//   if (event.target.hasAttribute('data-id')) {
//     const id = event.target.getAttribute('data-id');

//     const response = await fetch(`/api/projects/${id}`, {
//       method: 'DELETE',
//     });

//     if (response.ok) {
//       document.location.replace('/profile');
//     } else {
//       alert('Failed to delete project');
//     }
//   }
// };

// document
//   .querySelector('.new-project-form')
//   .addEventListener('submit', newFormHandler);

// document
//   .querySelector('.project-list')
//   .addEventListener('click', delButtonHandler);
