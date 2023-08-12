export default function Home() {
  return (
    <div
    style={{
      backgroundImage: "url(background.png)",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      animation: "wave 5s infinite",
    }}
    >
      <div className="main"></div>
      <div>
        <App />
      </div>

      <div>
        <App1 />
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
    <div className="mt-2">
      <div className="flex justify-start overflow-x-hidden gap-4">
        <Card image="/images/244.png" />
        <Card image="/images/38.png" />
        <Card image="/images/239.png" />
        <Card image="/images/19.png" />
        <Card image="/images/25.png" />
        <Card image="/images/28.png" />
        <Card image="/images/236.png" />
        <Card image="/images/10.png" />
        <Card image="/images/22.png" />
        <Card image="/images/25.png" />
      </div>
    </div>
  );
};

const App1 = () => {
  return (
    <div className="mt-28">
      <div className="flex justify-start overflow-x-hidden gap-4">
        <Card image="/images/211.png" />
        <Card image="/images/2.png" />
        <Card image="/images/7.png" />
        <Card image="/images/43.png" />
        <Card image="/images/46.png" />
        <Card image="/images/47.png" />
        <Card image="/images/48.png" />
        <Card image="/images/53.png" />
        <Card image="/images/59.png" />
        <Card image="/images/60.png" />
      </div>
    </div>
  );
};






