import { AnimateSharedLayout, motion } from "framer-motion";
import React, { useEffect, useState, useRef } from "react";


const Car = ({
  nickname,
  make,
  grade,
  model,
  type,
  year,
  zto60,
  zto100,
  quarmile,
  kitops,
  aspir,
  aspirO,
  carValue,
  country,
  cylinders,
  dlcDatePack,
  doors,
  drive,
  conversion,
  feBoost,
  horsepower,
  natAsp,
  rarity,
  region,
  reward,
  shopSeries,
  specAccess,
  topSpeed,
  added,
  wt,
  pi,
  s,
  h,
  a,
  l,
  b,
  t,
  wthp,
  pcnt,
  displ,
  uniqueID,
}) => {
  const [open, setOpen] = useState(false);
  const node = useRef();

  function downHandler({ key }) {
    if (key === "Escape") {
      setOpen(false);
    }
  }

  const handleClick = (e) => {
    if (node.current.contains(e.target)) {
      // Maybe copy link to card or like car info? this is a click inside the card

      return;
    }
    // outside click
    setOpen(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    window.addEventListener("keydown", downHandler);

    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener("keydown", downHandler);
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  const barCalc = (val) => {
    const width = parseFloat(val) * 10;
    var style = {
      width: `${width}%`,
    };
    return style;
  };

  return (
    <AnimateSharedLayout>
      <div className={uniqueID} style={{ display: "flex" }} ref={node}>
        {open ? (
          <motion.div
            className="expanded-card"
            layoutId="expandable-card"
            tabIndex="0"
          >
            <div id="mdiv" onClick={() => setOpen(false)}>
              <div className="mdiv">
                <div className="md"></div>
              </div>
            </div>

            <div className="left-card">
              <motion.h1
                className="expanded-card-h"
                layoutId="expandable-card-h"
              >
                {nickname}
              </motion.h1>
              {rarity ? (
                <h2 className={rarity.toLowerCase() + " rarity"}>{rarity}</h2>
              ) : null}
              <img
                className={"logo-open"}
                src={
                  "./manu/" + make.toLowerCase().replace(/ /g, "") + "-logo.png"
                }
                alt={make + " logo"}
              />
              <table className="stat-table">
                <tbody>
                  {pi ? (
                    <tr>
                      <td className="stat-left">Performance Index</td>
                      <td className="stat-right">
                        <p className="stat">{pi}</p>
                      </td>
                    </tr>
                  ) : null}
                  {s ? (
                    <tr>
                      <td className="stat-left">Speed</td>

                      <td className="stat-right">
                        <div className="stat-out">
                          <div className="stat-in" style={barCalc(s)}>
                            <p className="stat">{s}</p>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ) : null}
                  {h ? (
                    <tr>
                      <td className="stat-left">Handling</td>
                      <td className="stat-right">
                        <div className="stat-out">
                          <div className="stat-in" style={barCalc(h)}>
                            <p className="stat">{h}</p>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ) : null}
                  {a ? (
                    <tr>
                      <td className="stat-left">Acceleration</td>
                      <td className="stat-right">
                        <div className="stat-out">
                          <div className="stat-in" style={barCalc(a)}>
                            <p className="stat">{a}</p>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ) : null}
                  {l ? (
                    <tr>
                      <td className="stat-left">Launch</td>
                      <td className="stat-right">
                        <div className="stat-out">
                          <div className="stat-in" style={barCalc(l)}>
                            <p className="stat">{l}</p>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ) : null}
                  {b ? (
                    <tr>
                      <td className="stat-left">Braking</td>
                      <td className="stat-right">
                        <div className="stat-out">
                          <div className="stat-in" style={barCalc(b)}>
                            <p className="stat">{b}</p>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ) : null}
                  {horsepower ? (
                    <tr>
                      <td className="stat-left">Horsepower</td>
                      <td className="stat-right">
                        <p className="stat">{horsepower}</p>
                      </td>
                    </tr>
                  ) : null}
                  {t ? (
                    <tr>
                      <td className="stat-left">T</td>
                      <td className="stat-right">
                        <p className="stat">{t}</p>
                      </td>
                    </tr>
                  ) : null}
                  {wt ? (
                    <tr>
                      <td className="stat-left">Weight</td>
                      <td className="stat-right">
                        <p className="stat">{wt}</p>
                      </td>
                    </tr>
                  ) : null}
                  {wthp ? (
                    <tr>
                      <td className="stat-left">Weight/horsepower ratio</td>
                      <td className="stat-right">
                        <p className="stat">{wthp}</p>
                      </td>
                    </tr>
                  ) : null}
                  {displ ? (
                    <tr>
                      <td className="stat-left">Displacement</td>
                      <td className="stat-right">
                        <p className="stat">{displ}</p>
                      </td>
                    </tr>
                  ) : null}
                </tbody>
              </table>
            </div>
            <div className="right-card">
              <img
                className="carpic"
                src={"./cars/default.jpg"}
                alt={make + " logo"}
              />
              <div className="stats-lists">
                {" "}
                <table className="exp-list1">
                  <tbody>
                  <tr>
                    <td>Make</td>
                    <td>{make}</td>
                  </tr>
                  <tr>
                    <td>Model</td>
                    <td>{model}</td>
                  </tr>
                  <tr>
                    <td>Year</td>
                    <td>{year}</td>
                  </tr>
                  <tr>
                    <td>Class</td>
                    <td>{grade}</td>
                  </tr>
                  <tr>
                    <td>Type</td>
                    <td>{type}</td>
                  </tr>
                  {feBoost ? (
                    <tr>
                      <td>FE Boost</td>
                      <td>{feBoost}</td>
                    </tr>
                  ) : null}
                  {carValue ? (
                    <tr>
                      <td>Value</td>
                      <td>{carValue}</td>
                    </tr>
                  ) : null}
                  {country ? (
                    <tr>
                      <td>Country</td>
                      <td>{country}</td>
                    </tr>
                  ) : null}
                  {region ? (
                    <tr>
                      <td>Region</td>
                      <td>{region}</td>
                    </tr>
                  ) : null}

                  {dlcDatePack ? (
                    <tr>
                      <td>DLC/Pack</td>
                      <td>{dlcDatePack}</td>
                    </tr>
                  ) : null}
                  {reward ? (
                    <tr>
                      <td>Reward</td>
                      <td>{reward}</td>
                    </tr>
                  ) : null}
                  {shopSeries ? (
                    <tr>
                      <td>Shop Series:</td>
                      <td>{shopSeries}</td>
                    </tr>
                  ) : null}
                  {specAccess ? (
                    <tr>
                      <td>Special Access</td>
                      <td>{specAccess}</td>
                    </tr>
                  ) : null}
                  {added ? (
                    <tr>
                      <td>Added</td>
                      <td>{added}</td>
                    </tr>
                  ) : null}
                  </tbody>
                </table>


                <table className="exp-list2">
                <tbody>
                  {zto60 ? (
                    <tr>
                      <td>0-60</td>
                      <td>{zto60}</td>
                    </tr>
                  ) : null}
                  {zto100 ? (
                    <tr>
                      <td>0-100</td>
                      <td>{zto100}</td>
                    </tr>
                  ) : null}
                  {quarmile ? (
                    <tr>
                      <td>Quarter Mile</td>
                      <td>{quarmile}</td>
                    </tr>
                  ) : null}
                  {topSpeed ? (
                    <tr>
                      <td>Top Speed</td>
                      <td>{topSpeed}</td>
                    </tr>
                  ) : null}
                  {doors ? (
                    <tr>
                      <td>Doors</td>
                      <td> {doors}</td>
                    </tr>
                  ) : null}
                  {drive ? (
                    <tr>
                      <td>Drive:</td>
                      <td>{drive}</td>
                    </tr>
                  ) : null}

                  {kitops ? (
                    <tr>
                      <td>Kit Options</td>
                      <td>{kitops}</td>
                    </tr>
                  ) : null}
                  {conversion ? (
                    <tr>
                      <td>Conversion Options</td>
                      <td>{conversion}</td>
                    </tr>
                  ) : null}
                  {cylinders ? (
                    <tr>
                      <td>Cylinders</td>
                      <td>{cylinders}</td>
                    </tr>
                  ) : null}
                  {natAsp ? (
                    <tr>
                      <td>Naturally Aspirated</td>
                      <td>{natAsp}</td>
                    </tr>
                  ) : null}
                  {aspir ? (
                    <tr>
                      <td>Aspiration</td>
                      <td>{aspir}</td>
                    </tr>
                  ) : null}
                  {aspirO ? (
                    <tr>
                      <td>Aspiration Options</td>
                      <td>{aspirO}</td>
                    </tr>
                  ) : null}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="tunes"></div>
          </motion.div>
        ) : (
          <motion.div
            onClick={() => setOpen(true)}
            className="car"
            layoutId="expandable-card"
            tabIndex="0"
          >
            <motion.h2 layoutId="expandable-card-h">
              {year} {make} {model}
            </motion.h2>
            <img
              className="logo"
              src={
                "./manu/" + make.toLowerCase().replace(/ /g, "") + "-logo.png"
              }
              alt={make + " logo"}
            />
            <ul className="mini-stats">
              <li>{nickname}</li>
              <li>Class: {grade}</li>
              <li>Type: {type}</li>
            </ul>
          </motion.div>
        )}
      </div>
    </AnimateSharedLayout>
  );
};

export default Car;
