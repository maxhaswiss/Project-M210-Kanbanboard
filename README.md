# Project-M210-Kanbanboard

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

- [ ] **3. Data Model**  
  - Create tables for `Boards` and `Tasks` in Supabase  
  - Define relationships between tables  
  - Document the architecture  

- [ ] **4. Authentication**  
  - Set up Supabase Auth  
  - Implement login/sign-up functionality for users  

- [ ] **5. Create Boards**  
  - Create UI for board overview  
  - Implement functionality to create boards  
  - Save boards to the database  

- [ ] **6. Display Tasks**  
  - Create UI for the board with columns "To-Do," "In Progress," and "Done"  
  - Load and display tasks from the database  

- [ ] **7. Add Tasks**  
  - Implement functionality to add new tasks  
  - Create UI with input fields for title and description  
  - Save tasks to the database  

- [ ] **8. Move Tasks**  
  - Implement drag-and-drop functionality  
  - Update task status and position in the database  

- [ ] **9. Edit Tasks**  
  - Add an edit mode for tasks  
  - Save changes to the database  

- [ ] **10. Delete Tasks**  
  - Implement a "Delete" button  
  - Remove tasks from the database  

- [ ] **11. Testing and Debugging**  
  - Test functionality  
  - Fix any errors  

- [ ] **12. Deployment Documentation**  
  - Document deployment options  

## Entity Relationship Diagramm
![Entity Relationship Diagramm](/images/ERDiagramm.png)