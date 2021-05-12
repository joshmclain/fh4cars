import Car from "./Car";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { motion } from "framer-motion";

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

//Todo REMOVE EMPTY STRING FROM TYPES

const Carbox = () => {
  //Cardata is used to store all of the cars after Axios gets them from the JSON file
  const [carData, setCarData] = useState([]);
  const [typeList, setTypeList] = useState([]);
  const [makeList, setMakeList] = useState([]);
  const [modelList, setModelList] = useState([]);
  const [modelOptions, setModelOptions] = useState([]);
  //Checked is the state being used for the Class/Grade stat
  const [checked, setChecked] = useState(["D", "C", "B", "A", "S1", "S2"]);
  //Searchterm is what's used to store info from the searchbox
  const [searchTerm, setSearchTerm] = useState("");
  const [searchMake, setSearchMake] = useState("");
  const [searchModel, setSearchModel] = useState("");
  const [searchType, setSearchType] = useState("");
  const [visible, setVisible] = useState(25);
  //This is used with the checkbox filter
  const grade = [
    {
      _id: 1,
      grade: "D",
    },
    {
      _id: 2,
      grade: "C",
    },
    {
      _id: 3,
      grade: "B",
    },
    {
      _id: 4,
      grade: "A",
    },
    {
      _id: 5,
      grade: "S1",
    },
    {
      _id: 6,
      grade: "S2",
    },
  ];

  //Runs once to load the data from the JSON file
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("cars.json");
        //setCarData is just all the data I have in the file
        setCarData(response.data);
        console.log(response.data);
        //This creates a list of all the different car types using Map to get them all and Set to remove duplicates.
        const allCarsTypes = Array.from(
          new Set(
            response.data.map((type) => {
              return type["Car Type"];
            })
          )
        );

        setTypeList(allCarsTypes);

        //Array of all Makes(manufacturers)
        const allCarMakes = Array.from(
          new Set(
            response.data.map((make) => {
              return make.Makes;
            })
          )
        );

        setMakeList(allCarMakes);

        //This uses reduce to create an array with the makes/models
        const listOfModels = response.data.reduce(
          (makesSoFar, { Makes, Models, Year }) => {
            if (!makesSoFar[Makes]) makesSoFar[Makes] = [];
            makesSoFar[Makes].push({ Models, Year });
            return makesSoFar;
          },
          {}
        );

        setModelList(Object.entries(listOfModels));
      } catch (error) {
        console.error(error);
      }
    };
    fetchEvents();
  }, []);

  const handleToggle = (value) => {
    //Finds the current index of the value being toggled.
    const currentIndex = checked.indexOf(value);
    //newChecked is a duplicate array to "checked" state
    const newChecked = [...checked];
    //Index of -1 means that it isn't in the checkbox array, so if it's not there it pushes the value.
    if (currentIndex === -1) {
      newChecked.push(value);
    }
    //Else, it removes the value from the array.
    else {
      newChecked.splice(currentIndex, 1);
    }
    //Sets checked to the new array.
    setChecked(newChecked);
  };

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 25);
  };

  return (
    <div>
      <div className="filter">
        <ThemeProvider theme={darkTheme}>
          <FormGroup row>
            <div className="search-area">
              <TextField
                id="search-bar"
                defaultValue=""
                label="Search"
                fullWidth
                variant="outlined"
                className="search-bar"
                onChange={(event) => {
                  setSearchTerm(event.target.value);
                }}
              />
            </div>
            <div className="select-area">
              <Autocomplete
                className="select-drop"
                id="make-search"
                defaultValue=""
                options={makeList}
                value={searchMake}
                onChange={(event, newValue) => {
                  setSearchMake(newValue);
                  setSearchModel("");
                }}
                style={{ width: 300 }}
                renderInput={(params) => (
                  <TextField {...params} label="Make" variant="outlined" />
                )}
              />

              <Autocomplete
                className="select-drop"
                id="model-search"
                defaultValue=""
                options={carData
                  .filter((car) => car.Makes == searchMake)
                  .map((kar) => {
                    return kar.Models;
                  })}
                value={searchModel}
                onChange={(event, newValue) => {
                  setSearchModel(newValue);
                }}
                style={{ width: 300 }}
                renderInput={(params) => (
                  <TextField {...params} label="Model" variant="outlined" />
                )}
              />

              <Autocomplete
                id="type-search"
                options={typeList}
                onChange={(event, newValue) => {
                  setSearchType(newValue);
                }}
                style={{ width: 300 }}
                className="select-drop"
                renderInput={(params) => (
                  <TextField {...params} label="Type" variant="outlined" />
                )}
              />
            </div>
            <div className="grade-area">
              {grade.map((value, index) => (
                <React.Fragment key={index}>
                  <FormControlLabel
                    className="grade"
                    control={
                      <Checkbox
                        checked={
                          checked.indexOf(value.grade) === -1 ? false : true
                        }
                        value={value.grade}
                        name="grade"
                        onChange={() => handleToggle(value.grade)}
                      />
                    }
                    label={value.grade + " class"}
                  />
                </React.Fragment>
              ))}
            </div>
          </FormGroup>
        </ThemeProvider>
      </div>

      <div className="cars">
        {carData
          .filter((val) => {
            if (checked.indexOf(val["Class"]) > -1) {
              if (searchTerm == "" && searchMake == "" && searchType == "") {
                return val;
              } else if (
                (searchTerm == "" ||
                  val.Makes.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  val.Nickname.toLowerCase().includes(
                    searchTerm.toLowerCase()
                  ) ||
                  val.Models.toString()
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase()) ||
                  val["Car Type"]
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase()) ||
                  val.Year.toString()
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())) &&
                (searchMake === null ||
                  searchMake === "" ||
                  val.Makes.toLowerCase() ==
                    (searchMake || "").toLowerCase()) &&
                (searchModel === "" ||
                  searchMake === null ||
                  searchModel === null ||
                  val.Models.toLowerCase().includes(
                    (searchModel || "").toLowerCase()
                  )) &&
                (searchType === "" ||
                  searchType === null ||
                  val["Car Type"]
                    .toLowerCase()
                    .includes((searchType || "").toLowerCase()))
              )
                return val;
            }
          })
          .slice(0, visible)
          .map((car) => (
            <Car
              key={car["Unique ID"]}
              nickname={car.Nickname}
              make={car.Makes}
              grade={car.Class}
              model={car.Models}
              type={car["Car Type"]}
              year={car.Year}
              zto60={car["0-60 Sec"]}
              zto100={car["0-100 Sec"]}
              quarmile={car["1/4 Mile"]}
              kitops={car["Aero or kit Options"]}
              aspir={car.Aspiration}
              aspirO={car["Aspiration Options"]}
              carValue={car["Car Value"]}
              country={car.Country}
              cylinders={car.Cylinders}
              dlcDatePack={car["DLC Date/Pack"]}
              doors={car.Doors}
              drive={car.Drive}
              conversion={car["Engine Conversions (hp)"]}
              feBoost={car["FE Boost"]}
              horsepower={car.HP}
              natAsp={car["Naturally Aspirated"]}
              rarity={car.Rarity}
              region={car.Region}
              reward={car.Reward}
              shopSeries={car["Shop Series"]}
              specAccess={car["Special Access"]}
              topSpeed={car["Top Speed"]}
              wt={car.Wt}
              added={car.Added}
              pi={car.PI}
              s={car.S}
              h={car.H}
              a={car.A}
              l={car.L}
              b={car.B}
              t={car.T}
              wthp={car["Wt / HP"]}
              pcnt={car["%"]}
              disp={car.Displ}
            />
          ))}
      </div>

      <div className="button-box">
        <motion.button
          className="load-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={showMoreItems}
        >
          <h1>More</h1>
        </motion.button>
      </div>
    </div>
  );
};
export default Carbox;
