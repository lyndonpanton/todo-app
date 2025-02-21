# TODO

## Description

A list of tasks to complete for the todo-app project.

## Tasks

### Data

- [ ] Connect PHP to PDO or MySQLi
- [ ] Todo items should be retrieved from a database when the application starts
- [ ] Todo items should be added to a database when created
- [ ] Todo items should be removed from a database when deleted
- [ ] Todo items should be updated in a database when modified

### Functionality

- [x] Todo checkbox icon should change depending on its completed state
- [x] Todo input should not have suggestions
- [x] Categories should be displayed on todo items via colour
- [ ] Each category dropdown option should have a colour displayed next to it
- [x] Users should be able to categorise todo items
    - Change categoriees to use a coloured circle icon instead of coloured text
- [x] Users should be able to view each category of items individually
- [ ] Users should be warned if they attempt to create a todo item with the same
name as another todo item
- [ ] Users should be able to restore todo items from a recycling bin
- [ ] Users should be able to permenantly delete todo items in the recycling bin
- [ ] Users should be able to select a group of todo items simultaneuously
- [ ] Users should be able to select all todo items simultaneuously

### Styling

- [x] Create wireframe prototypes of multiple screen sizes
    - [x] Create a wireframe prototype for mobile devices
    - [x] Create a wireframe prototype for tablet devices
    - [x] Create a wireframe prototype for desktop devices
- [ ] Create interfaces for multiple screen sizes
    - [ ] Create an interface for mobile devices
    - [ ] Create an interface for tablet devices
    - [ ] Create an interface for desktop devices
- [x] Add an icon for the application's browser tab
- [ ] Users should be able to view each individual category of todo items
- [ ] Users should be able to view a list of all todo items, regardless of their
category

### Conflicts

- [x] Categories cannot have the same name
- [x] Todo items cannot be created without a category
- Todo items should be differentiated by something other than name (i.e.,
_todo-id_)

### Bonus

- Allow users to create, update, and delete their own categories
    - Deleting a category should delete all todo items in that cateogory. A
    warning should be given if the category that is about to be deleted as any
    todo items in it.
- Allow users to change the category of individual todo items

### Bugs

- Since the dropdown does not reset when the user refreshes the page but the
current category does, the category will be defined as the default category
until the dropdown option is changed
