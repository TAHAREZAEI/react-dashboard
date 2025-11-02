import React from "react";

function UsersPage() {
  // داده‌های نمونه کاربران
  const users = [
    { id: 1, name: "طاها", email: "taha@example.com" },
    { id: 2, name: "سارا", email: "sara@example.com" },
    { id: 3, name: "محمد", email: "mohammad@example.com" },
  ];

  return (
    <div>
      <h2>لیست کاربران</h2>
      <table className="users-table">
        <thead>
          <tr>
            <th>شناسه</th>
            <th>نام</th>
            <th>ایمیل</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UsersPage;
