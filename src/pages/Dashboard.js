import userEvent from "@testing-library/user-event";

const Dashboard = ({ user }) => {
  return (
    <section className="section">
      <h4>Hello, {user?.name}</h4>
    </section>
  );
};
export default Dashboard;
