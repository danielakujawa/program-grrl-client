# ProgramGrrl

- Description: … is an app where girls can find programmer sponsors who can help them to start programming and give them technical or moral advice.

## User Stories

  **404:** As an anon/user I can see a 404 page if I try to reach a page that does not exist so that I know it's my fault

  **Signup:** As an anon I can sign up in the platform as an applicant or as a sponsor 
  
  **Login:** As a user I can login to the platform so that I can see my profile
  
  **Logout:** As a user I can logout from the platform so that no one can use my account

  **Edit my profile:** As a user I want to edit my information

  **List applications:** As a user(sponsor) I want to see all the applications so that I can choose one to sponsor
 
  **Applicant details:** As a user(sponsor) I want to see an applicant profile and be able to sponsor

  **Sponsor** I want to sponsor an applicant so that they see me in their profile - press sponsor button and go back to my profile

  **See my profile:** As a user(applicant/sponsor) I want to see my profile

  **See my connections:** As a user(applicant) I want to see my sponsor

  **See my connections:** As a user(sponsor) I want to see my applicants

  **Filter applications:** As a user(sponsor) I want to filter the applications so that I can see the applications of a particular programming language

  **See my sponsor:** As a user(applicant) I want to see the profile of my sponsor

  **Homepage:** As an anon I can see the "how it works" information

## Backlog

  **Profile pic** predefined list of superheroes

  **Filter** by programming languaged

  **Chat:** As a user I would like to comunicate with my applicant/sponsor

  
# Client

## Routes

  - / - Homepage
  - /signup - Signup form
  - /login - Login form
  - /applicants - applicants list
  - /profile/:id - applicant/sponsor detail
  - /profile/:id/edit - applicant/sponsor details and status

### Backlog

  - Chat
  - Choose picture

## Services

- Auth Service
  - auth.login(username, password)
  - auth.signup(username, password)
  - auth.logout()
  - auth.me()
- User Service
  - user.updateOne(data)
  - user.getAllApplicants()
  - user.getOne(id)
  - user.sponsorOne(applicantId)	


## Pages

- 404 Page
- Sign in Page
- Log in Page
- Home Page
- Applicants List Page
- Profile Detail Page
- Edit Profile Page

## Components

- Navbar component
- Application Card component


## Guards

Init Auth, Require User, Require Anon, Require Profile Owner, Require Sponsor

  - / - Homepage (Init Auth)
  - /signup - Signup form (Require Anon)
  - /login - Login form (Require Anon)
  - /applicants - applicants list (Require Sponsor)
  - /profile/:id - (Require User) => require profile owner or require sponsor
  - /profile/:id/edit (Require Profile Owner)

# Server

## Models

  User model 
  ojo agregar type: applicant / sponsor

  ```
  User {
    username: {
      type: string,
      required: true
    },
    password: {
      type: string,
      required: true
    },
    userType: {
      type: string,
      required: true,
      enum: ['applicant', 'sponsor']
    },
    complete: {
      type: boolean,
    },
    image: {
      type: string,
      default: 'https://cdn1.vectorstock.com/i/thumb-large/45/70/female-avatar-profile-picture-silhouette-light-vector-4684570.jpg'
    },
    name: {
      type: string,   
    },
    country: {
      type: string,  
    },
    languages: {
      type: string,   
    },
    email: {
      type: string,
      unique: true
    },
    description: {
      type: string,
    },
    programming-languages: [{
      type: String,
      enum: ['javascript', 'python', 'ruby', 'java', 'otro']
    }],
    sponsor: {
      type: objectId,
      ref: 'User'
    },
  }
  ```


## API Endpoints/Backend Routes

  - GET /auth/me
  - POST /auth/signup
  - POST /auth/login
  - POST /auth/me


  - PUT /user/me Body: Data // update req.session.currentUser && set complete to true
  - GET /user/applicants // only with userType = applicant && complete = true && with sponsor = null
  - GET /user/:id
  - POST /user/:applicantId/sponsor
