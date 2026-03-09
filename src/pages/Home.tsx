function Home() {
    return (
      <div className = "page">

        <div className = "header">
          <h1>Student Services Portal</h1>
        </div>
        
        <div className = "card">
          <h2>Welcome Students!</h2>
          <p className="home">This portal allows students to easily access important university
            service such as enrollment assistance, academic support, campus
            announcements, and student resources. Our goal is to 
            provide a convenient and organized platform where students can find 
            the information they need anytime.</p>
          
          <ul>
            <li>See your schedule, class details, and room locations.</li>
            <li>Ask for academic guidance or support when you need it.</li>
            <li>Read the latest campus news, events, and announcements.</li>
            <li>Find study materials, forms, and student guides.</li>
          </ul>
        </div>
      </div>
    );
}
  
export default Home;