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