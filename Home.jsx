import Navbar from "../components/Navbar";
import EmployeeForm from "../components/EmployeeForm";
import EmployeeList from "../components/EmployeeList";
import SearchBar from "../components/SearchBar";

function Home() {
  return (
    <div>

      <Navbar />

      <div className="container">

        <h1 className="main-heading">
          Employee Performance Dashboard
        </h1>

        <p className="sub-heading">
          AI Powered Employee Analytics System
        </p>

        <EmployeeForm />

        <SearchBar />

        <EmployeeList />

      </div>

    </div>
  );
}

export default Home;