
export default function Home() {
  return (
    <div
      style={{
        backgroundImage: "url(background.png)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        display: "flex",
        flexDirection: "column", // Added to stack elements vertically
        justifyContent: "center",
        alignItems: "center",
        animation: "wave 5s infinite",
      }}
    >
      <div class="main"></div>
      <div>
     
         <App/>
       
      </div>

    </div>


  );
}

const Card = ({ image }) => {
  return (
    <div className="card">
      <img src={image} alt="Card" className="w-32 h-auto" />
    </div>
  );
};

const App = () => {
  return (
    <div className="flex justify-start overflow-x-hidden gap-4">
      <Card image="/images/1.png" />
      <Card image="/images/2.png" />
      <Card image="/images/4.png" />
      <Card image="/images/5.png" />
      <Card image="/images/6.png" />
      <Card image="/images/7.png" />
      <Card image="/images/9.png" />
      <Card image="/images/10.png" />
      <Card image="/images/11.png" />
      <Card image="/images/12.png" />
     
    </div>
  );
};






 



