# LearnLingo

LearnLingo is an application designed for a company that offers services of online language teachers. The application allows users to browse through available teachers, filter them based on specific criteria, and manage their favorites.

## Table of Contents

- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Pages and Features](#pages-and-features)
- [Technical Specifications](#technical-specifications)
- [Setup Instructions](#setup-instructions)
- [Contributions](#contributions)
- [License](#license)

## Project Overview

LearnLingo provides an easy-to-use platform for students to find and book language lessons with online teachers. The application features three main pages:

- **Home**: Showcases the company benefits and provides a link to start exploring the application.
- **Teachers**: Displays a list of available teachers with filtering options.
- **Favorites**: Private page where users can view their favorite teachers.

## Technologies Used

- **Frontend**: React, React Router, styled-components
- **Backend**: Firebase Realtime Database
- **Form Handling and Validation**: react-hook-form, yup
- **Authentication**: Firebase Authentication

## Pages and Features

### Home Page

- Displays a list of company benefits.
- Provides a link to start working with the application, redirecting to the Teachers page.
- Styling is implemented based on provided design examples or prototypes.

### Teachers Page

- Shows a list of teachers.
- Allows filtering by:
  - Language of instruction.
  - Level of student knowledge.
  - Price per hour of class.
- Each teacher card includes:
  - Name, surname, languages, levels, rating, reviews, price per hour, lessons done, avatar, lesson info, conditions, and experience.
- Users can:
  - Load more teacher cards.
  - Add teachers to favorites (authenticated users only).
  - View more detailed information about a teacher.
  - Book a trial lesson through a modal form.

### Favorites Page

- Accessible only to authenticated users.
- Displays all teachers added to the user's favorites.
- Similar styling to the Teachers page.

## Technical Specifications

1. **Authentication**:

   - Implement registration, login, current user data retrieval, and logout using Firebase Authentication.
   - Use react-hook-form and yup for form handling and validation.
   - Close modal windows via a cross button, backdrop click, or Esc key.

2. **Database**:

   - Create a collection of teachers in Firebase Realtime Database with the specified fields.
   - Populate the collection using `teachers.json`.

3. **Teacher Cards**:

   - Render 4 teacher cards initially, with more loaded on demand.
   - Handle "heart" button clicks:
     - Show modal for unauthenticated users.
     - Add/remove from favorites for authenticated users, using localStorage or Firebase.

4. **Persistent State**:

   - Maintain the state of favorite teachers across page reloads.

5. **Detailed View and Booking**:

   - Open a detailed view of the teacher on "Read more" button click.
   - Open a booking form on "Book trial lesson" button click.
   - Use react-hook-form and yup for the booking form, with modal handling as specified.

6. **Favorites Page**:
   - Display all favorite teachers for authenticated users.
   - Ensure consistent styling with the Teachers page.

## Setup Instructions

1. **Clone the repository**:
   git clone https://github.com/AleksMarkov/learnlingo.git
   cd learnlingo
   **Contributions**:
   Contributions are welcome! Please feel free to submit a pull request or open an issue.

**License**:
This project is licensed under the MIT License.
