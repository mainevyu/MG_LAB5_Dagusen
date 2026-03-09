function Services() {
  return (
    <div className="page">

      <div className="header">
        <h1>Student Services</h1>
      </div>

      <h2>What Can We Offer?</h2>
      <div className="grid">
        <div className="card">
          <h3>Enrollment Assistance</h3>
          <p>
            Get help with course registration, subject selection, and enrollment procedures. 
            Our team is here to make sure you get into the classes you need without stress.
          </p>
        </div>

        <div className="card">
          <h3>Academic Support</h3>
          <p>
            Access tutoring services, academic advising, and learning resources to support your studies. 
            You can also get tips on improving your grades and study habits.
          </p>
        </div>

        <div className="card">
          <h3>Library Services</h3>
          <p>
            Explore digital and physical library resources, research materials, and study areas. 
            You can borrow books or access online databases anytime.
          </p>
        </div>

        <div className="card">
          <h3>Student Welfare</h3>
          <p>
            Find support services including counseling, health services, and student development programs. 
            Our staff are available to help with any personal or academic concerns.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;