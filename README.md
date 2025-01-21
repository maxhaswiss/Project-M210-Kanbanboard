# Project-M210-Kanbanboard

**Deployment Instructions for End Users**

This guide will help you deploy the Kanban Board application to your environment. Follow these steps to host and run the application.

---

**1. Prerequisites**

Before deploying the Kanban Board application, ensure the following:
- Node.js and npm are installed.
- A Supabase project is set up, and the API URL and Key are available.
- A hosting solution is ready (e.g., Vercel, Netlify, or a custom server).

---

**2. Clone the Repository**

1. Open a terminal on your machine.
2. Run the following command to clone the repository:
   `git clone https://github.com/maxhaswiss/Project-M210-Kanbanboard.git' or 'git clone git@github.com:maxhaswiss/Project-M210-Kanbanboard.git'

---

**3. Configure Environment Variables**

1. Create a `.env` file in the project root directory by running:
   `touch .env`
   or just create one with your gui
2. Add the following variables to the `.env` file:
   ```
   VITE_API=<Your Supabase API URL>
   VITE_KEY=<Your Supabase Key>
   ```
   Replace `<Your Supabase API URL>` and `<Your Supabase Key>` with your Supabase credentials.

---

**4. Install Dependencies**

Run the following command to install the required packages:
`npm install`

---

**5. Build the Application**

Create a production-ready build of the application by running:
`npm run build`

This will generate a `build` directory containing the files necessary for deployment.

---

**6. Deploy the Application**

**Option 1: Deploy with Vercel**
1. Install the Vercel CLI using: `npm install -g vercel`
2. Deploy the application by running: `vercel`
3. Follow the prompts to link the project to your Vercel account and configure the deployment.
4. Add your environment variables (`VITE_API` and `VITE_KEY`) in the Vercel dashboard under **Settings → Environment Variables**.
5. Your app will be live at the Vercel-provided URL.

**Option 2: Deploy with Netlify**
1. Install the Netlify CLI using: `npm install -g netlify-cli`
2. Build the application: `npm run build`
3. Deploy the application: `netlify deploy`
4. When prompted, specify the `build` directory as the deployment folder.
5. Add environment variables (`VITE_API` and `VITE_KEY`) in the Netlify dashboard under **Site Settings → Environment Variables**.
6. Your app will be live at the Netlify-provided URL.

**Option 3: Deploy on a Custom Server**
1. Transfer the contents of the `build` directory to your server (e.g., using SSH or FTP).
2. Set up a web server like Nginx or Apache to serve the files. For Nginx, use the following configuration:
   ```
   server {
       listen 80;
       server_name your-domain.com;

       root /path/to/build;
       index index.html;

       location / {
           try_files $uri /index.html;
       }
   }
   ```
3. Restart your web server to apply the changes using: `sudo systemctl restart nginx`
4. Add your environment variables (`VITE_API` and `VITE_KEY`) to the server or use `.env` files if supported.

---

**7. Test Your Deployment**

1. Visit your app's URL (e.g., provided by Vercel or Netlify, or your server domain).
2. Ensure the app loads correctly and connects to Supabase for authentication and data.

---

**8. Troubleshooting**

- **Environment Variables Missing**: Ensure `VITE_API` and `VITE_KEY` are correctly set.
- **Build Errors**: Ensure all dependencies are installed with `npm install`.
- **Database Issues**: Verify your Supabase project and table structure match the application requirements.

Your Kanban Board application is now deployed and ready to use! 🎉

## Elevator Pitch
I want to create a sleek Kanban board that is user-friendly and organizes tasks into Kanban columns like 'To-Do,' 'In Progress,' and 'Done.' With Supabase as the backend, it provides a simple way to create boards and manage tasks efficiently

## User Stories

---

### **User Story 1: Create a Board**  
**As a** user  
**I want to** create a new Kanban board  
**so that I can** organize my tasks for different projects or topics.  

**Acceptance Criteria**:  
- The user can create a new board by entering a name.  
- The board is saved in the database and linked to the user.  
- After creation, the user sees an empty board with columns: "To-Do," "In Progress," and "Done."

---

### **User Story 2: Add Tasks**  
**As a** user  
**I want to** add new tasks to a board  
**so that I can** plan my work effectively.  

**Acceptance Criteria**:  
- The user can provide a title and optionally a description for the task.  
- Each task is added by default to the "To-Do" column.  
- The task is saved in the database and immediately displayed in the UI.

---

### **User Story 3: Move Tasks**  
**As a** user  
**I want to** move tasks between the columns "To-Do," "In Progress," and "Done"  
**so that I can** track the progress of my work.  

**Acceptance Criteria**:  
- The user can move a task via drag-and-drop or buttons.  
- The task's `status` is updated in the database.  
- The task's position within the column is saved and reflected in the UI.

---

### **User Story 4: Edit Tasks**  
**As a** user  
**I want to** edit the title and description of a task  
**so that I can** make changes or add more details.  

**Acceptance Criteria**:  
- The user can open a task in edit mode and change the title or description.  
- Changes are immediately updated in the database.  
- The updated task is displayed in the UI.

---

### **User Story 5: Delete Tasks**  
**As a** user  
**I want to** delete tasks  
**so that I can** remove unnecessary or completed tasks.  

**Acceptance Criteria**:  
- The user can delete a task using a "Delete" button.  
- The task is removed from the database and disappears from the UI.

---

### **User Story 6: Private Boards**  
**As a** user  
**I want to** only access boards that I created  
**so that I can** keep my data private and secure.  

**Acceptance Criteria**:  
- Only boards linked to the logged-in user's `owner_id` are displayed.  
- The user cannot see or modify boards created by other users.  

---

## Work plan

| Step                               | Description                                                                 | Estimated Time  |
|------------------------------------|------------------------------------------------------------------------------|-----------------|
| **1. Project Setup**               | - Create Supabase project<br>- Initialize React app<br>- Integrate Supabase | 30 Min          |
| **2. Set Up GitHub Actions**       | - Configure GitHub Actions for React to automatically test functionality    | 30 Min          |
| **3. Data Model**                  | - Create tables for `Boards` and `Tasks` in Supabase<br>- Define relationships and document the architecture | 45 Min         |
| **4. Authentication**              | - Set up Supabase Auth<br>- Implement login/sign-up functionality for users | 30 Min          |
| **5. Create Boards**               | - Create UI for the board overview<br>- Implement functionality to create boards<br>- Save boards to the database | 1 Hr           |
| **6. Display Tasks**               | - Create UI for the board with columns "To-Do," "In Progress," and "Done"<br>- Load and display tasks from the database | 1 Hr           |
| **7. Add Tasks**                   | - Implement functionality to add new tasks<br>- Create UI with input fields for title and description<br>- Save tasks to the database | 1 Hr           |
| **8. Move Tasks**                  | - Implement drag-and-drop functionality<br>- Update task status and position in the database | 1 Hr           |
| **9. Edit Tasks**                  | - Add an edit mode for tasks<br>- Save changes to the database              | 45 Min          |
| **10. Delete Tasks**               | - Implement a "Delete" button<br>- Remove tasks from the database           | 30 Min          |
| **11. Testing and Debugging**      | - Test functionality<br>- Fix any errors                                   | 1 Hr            |
| **12. Document Deployment**        | - Document deployment options                                              | 30 Min          |

## Progress Checklist

- [x] **1. Project Setup**  
  - Supabase project created  
  - React app initialized  
  - Supabase integrated  

- [x] **2. GitHub Actions Setup**  
  - CI workflow file created in `.github/workflows`  
  - Workflow tested and confirmed working for Node.js builds  

- [x] **3. Data Model**  
  - Create tables for `Boards` and `Tasks` in Supabase  
  - Define relationships between tables  
  - Document the architecture  

- [x] **4. Authentication**  
  - Set up Supabase Auth  
  - Implement login/sign-up functionality for users  

- [x] **5. Create Boards**  
  - Create UI for board overview  
  - Implement functionality to create boards  
  - Save boards to the database  

- [x] **6. Display Tasks**  
  - Create UI for the board with columns "To-Do," "In Progress," and "Done"  
  - Load and display tasks from the database  

- [x] **7. Add Tasks**  
  - Implement functionality to add new tasks  
  - Create UI with input fields for title and description  
  - Save tasks to the database  

- [x] **8. Move Tasks**  
  - Implement moving task functionality  
  - Update task status and position in the database  

- [x] **9. Edit Tasks**  
  - Add an edit mode for tasks  
  - Save changes to the database  

- [x] **10. Delete Tasks**  
  - Implement a "Delete" button  
  - Remove tasks from the database  

- [x] **11. Testing and Debugging**  
  - Test functionality  
  - Fix any errors  

- [x] **12. Deployment Documentation**  
  - Document deployment options  

- [x] **13. Critcal review**  
  - which goals were accomplished or not


## Entity Relationsithip Diagramm
![Entity Relationship Diagramm](/images/ERDiagramm.png)

## Project review
Overall i am satisfied with my project my requirements were all met except the drag and drop. Initially i wanted to use dnd but i decided to not do it because it was too complex for the little time i've had left. the other thing was moving the tasks between the lines and the status that i did not do also because of time reasons. But these are all things i can do in the future.