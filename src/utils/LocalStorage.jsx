const employees = [
  {
    id: 1,
    firstName: "Aisha",
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        title: "Task 1",
        description: "Complete project report",
        date: "2024-10-20",
        category: "Reporting",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Task 2",
        description: "Prepare for team meeting",
        date: "2024-10-22",
        category: "Meetings",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Task 3",
        description: "Update documentation",
        date: "2024-10-25",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
    taskCount: {
      active: 2,
      new: 1,
      completed: 1,
      failed: 0,
    },
  },
  {
    id: 2,
    firstName: "Ali",
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        title: "Task 1",
        description: "Analyze sales data",
        date: "2024-10-21",
        category: "Analysis",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Task 2",
        description: "Attend training session",
        date: "2024-10-23",
        category: "Training",
        active: true,
        newTask: true,
        completed: false,
        failed: true,
      },
      {
        title: "Task 3",
        description: "Follow up with clients",
        date: "2024-10-26",
        category: "Client Relations",
        active: false,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
    taskCount: {
      active: 2,
      new: 2,
      completed: 0,
      failed: 1,
    },
  },
  {
    id: 3,
    firstName: "Fatima",
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        title: "Task 1",
        description: "Design new feature",
        date: "2024-10-24",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Task 2",
        description: "Code review",
        date: "2024-10-25",
        category: "Development",
        active: true,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Task 3",
        description: "Test application",
        date: "2024-10-27",
        category: "Testing",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
    taskCount: {
      active: 2,
      new: 1,
      completed: 1,
      failed: 1,
    },
  },
  {
    id: 4,
    firstName: "Omer",
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        title: "Task 1",
        description: "Review budget proposal",
        date: "2024-10-21",
        category: "Finance",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Task 2",
        description: "Prepare financial report",
        date: "2024-10-23",
        category: "Finance",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Task 3",
        description: "Finalize budget for next quarter",
        date: "2024-10-29",
        category: "Finance",
        active: false,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
    taskCount: {
      active: 2,
      new: 2,
      completed: 0,
      failed: 0,
    },
  },
  {
    id: 5,
    firstName: "Zain",
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        title: "Task 1",
        description: "Implement new policy",
        date: "2024-10-22",
        category: "Policy",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Task 2",
        description: "Conduct performance reviews",
        date: "2024-10-24",
        category: "HR",
        active: true,
        newTask: true,
        completed: false,
        failed: true,
      },
      {
        title: "Task 3",
        description: "Organize team-building event",
        date: "2024-10-30",
        category: "Events",
        active: false,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
    taskCount: {
      active: 2,
      new: 2,
      completed: 0,
      failed: 1,
    },
  },
];

const admin = [
  {
    id: 1,
    email: "admin@me.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  return {
    employees,
    admin,
  };
};
