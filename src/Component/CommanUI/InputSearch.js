import React, { useState } from "react";
import { 
  FormControl,
  InputAdornment,
  TextField,
} from "@mui/material";
import { Clear, Search } from "@mui/icons-material";

const InputSearch = (props) => {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleClear = () => {
    setSearchValue("");
  };

  return (
    <div id="app">
      <FormControl style={{ width: "100%" }}>
        <TextField
          size="small"
          variant="outlined"
          placeholder={props?.placeholder}
          value={searchValue}
          onChange={handleChange}
          InputProps={{
            endAdornment: (
              <>
                {searchValue && (
                  <InputAdornment position="end" onClick={handleClear} style={{ cursor: 'pointer' }}>
                    <Clear />
                  </InputAdornment>
                )}
                <InputAdornment position="end">
                  <Search style={{ cursor: 'pointer' }} />
                </InputAdornment>
              </>
            ),
          }}
          sx={{
            backgroundColor: props?.bgcolor || 'white',
            borderRadius: "10px", 
            "& .MuiOutlinedInput-root": {
              borderRadius: "10px",
            },
            "& input": {
              fontSize: {
                xs: '0.75rem',  // Font size for mobile (extra-small)
                sm: '0.875rem',  // Font size for small screens
                md: '1rem',      // Font size for medium screens
              },
            },
          }}
        />
      </FormControl>
    </div>
  );
};

export default InputSearch;
