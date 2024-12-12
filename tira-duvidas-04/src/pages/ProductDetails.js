import { Grid } from "@mui/material";
import { Link, useLocation } from "react-router-dom"
import SimpleBottomNavigation from "../components/Navigation";

export default function ProductDetails() {
  let { state } = useLocation();

  return (
    <div className="detailed-content">
      <Link to="/products" state={{ menuOptionSelected: state.menuOptionSelected }}>
        <button className="back">Voltar</button>
      </Link>
      <div>
        <img width={500} src={state.productInfo.image} alt='Imagem do produto'/>
      </div>
      <div>
        <h2>{state.productInfo.title}</h2>
        <p>{state.productInfo.description}</p>
        {/* https://mui.com/material-ui/react-grid/ */}
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center">
            <SimpleBottomNavigation />
        </Grid>
      </div>
    </div>
  )
}
