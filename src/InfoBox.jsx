import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import "./InfoBox.css";

export default function InfoBox({ info }) {
  let image =
    "https://images.unsplash.com/photo-1566321343730-237ec35e53f3?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D";

  const HOT_URL =
    "https://images.unsplash.com/photo-1767884161595-a0ca66463984?q=80&w=1255&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D";
  const COLD_URL =
    "https://images.unsplash.com/photo-1589218112660-81ef972e89e3?q=80&w=1330&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D";
  const RAIN_URL =
    "https://images.unsplash.com/photo-1633555288122-a47b3e12c24d?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D";

  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 80
                ? RAIN_URL
                : info.temp > 15
                  ? HOT_URL
                  : COLD_URL
            }
            title="Weather"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <b>{info.city}</b>
              {
              info.humidity > 80
                ? <AcUnitIcon />
                : info.temp > 15
                  ? <WbSunnyIcon />
                  : <ThunderstormIcon />
            }
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              component={"span"}
            >
              <div>Temprature: {info.temp}&deg;C</div>
              <div>Humidity: {info.humidity}</div>
              <div>Max temp: {info.tempMax}&deg;C</div>
              <div>Min temp: {info.tempMin}&deg;C</div>
              <div>
                Temprature can be described as <i>{info.weather}</i> and feels
                like {info.feelsLike}
              </div>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
