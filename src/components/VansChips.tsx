// React Router imports
import { 
  Link, 
  useAsyncValue, 
  useSearchParams 
  } from "react-router-dom";

// MUI imports
import { 
   Chip, 
   Button, 
   Stack 
   } from "@mui/material";

// Utilities imports
import { vanTypeBackgroundColor} from "../constants";
import { getUniqueVanTypes } from "../utils"

const VansChips = () => {
  const vans = useAsyncValue();


  const [ searchParams, setSearchParams] = useSearchParams();
  const filterType = searchParams.get("type");

 
  const renderChips = (vanTypes) => {
    const chips = vanTypes?.map((type) => (
      <Chip
        component={Link}
        to={`?type=${type}`}
        variant="body"
        key={type}
        sx={{
          textTransform: "capitalize",
          px: 1,
          backgroundColor: filterType === type 
             ? vanTypeBackgroundColor[type] 
             : "primary.dark",
          color: filterType == type 
               ? "white" 
               : "black",
          "&:hover": {
            backgroundColor: filterType === type 
             ? vanTypeBackgroundColor[type] 
             : "primary.dark",
            color: filterType == type 
               ? "white" 
               : "black"
          },
        }}
        label={type}
        clickable
        disableRipple
      />
    ));

    return chips;
  };

  return (
    <>
    { vans.length > 2 &&
      <Stack
        component="nav"
        alignItems="baseline"
        sx={{
          listStyleType: "none",
          p: 0,
          mb: 4,
        }}
        direction="row"
        justifyContent="space-between"
      >
        <Stack 
          direction="row" 
          spacing={2}
          >
          {renderChips(getUniqueTypes(vans))}
        </Stack>

        {filterType && (
          <Button
            variant="text"
            component={Link}
            to="."
            sx={{
              textTransform: "none",
              py: 1,
              color: "black",
            }}
          >
            Clear filters
          </Button>
        )}
      </Stack>
      
      }
    </>
  );
};

export default VansChips;
