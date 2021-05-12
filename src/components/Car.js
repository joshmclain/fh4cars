import { AnimateSharedLayout, motion } from "framer-motion";
import React, { useState } from "react";

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
}) => {
  const [open, setOpen] = useState(false);

  const barCalc = (val) => {
    const width = parseFloat(val) * 10;
    var style = {
      width: `${width}%`,
    };
    return style;
  };

  return (
    <AnimateSharedLayout>
      {open ? (
        <motion.div className="expanded-card" layoutId="expandable-card">
          <div id="mdiv" onClick={() => setOpen(false)}>
            <div class="mdiv">
              <div class="md"></div>
            </div>
          </div>

          <div className="left-card">
            <motion.h1 className="expanded-card-h" layoutId="expandable-card-h">
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
              {pi ? (
                <tr>
                  <td className="stat-left">Performance Index</td>
                  <td className="stat-right">
                    <p classname="stat">{pi}</p>
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
              <ul className="exp-list1">
                <li>Make: {make}</li>
                <li>Model: {model}</li>
                <li>Year: {year}</li>
                <li>Class: {grade}</li>
                <li>Type: {type}</li>

                {feBoost ? <li>FE Boost: {feBoost}</li> : null}

                {carValue ? <li>Value: {carValue}</li> : null}
                {country ? <li>Country: {country}</li> : null}
                {region ? <li>Region: {region}</li> : null}

                {dlcDatePack ? <li>DLC/Pack: {dlcDatePack}</li> : null}
                {reward ? <li>Reward: {reward}</li> : null}
                {shopSeries ? <li>Shop Series: {shopSeries}</li> : null}
                {specAccess ? <li>Special Access: {specAccess}</li> : null}
                {added ? <li>Added: {added}</li> : null}
              </ul>
              <ul className="exp-list2">
                {zto60 ? <li>0-60: {zto60}</li> : null}
                {zto100 ? <li>0-100: {zto100}</li> : null}
                {quarmile ? <li>Quarter Mile: {quarmile}</li> : null}
                {topSpeed ? <li>Top Speed: {topSpeed}</li> : null}
                {doors ? <li>Doors: {doors}</li> : null}
                {drive ? <li>Drive: {drive}</li> : null}
                {kitops ? <li>Kit Options: {kitops}</li> : null}
                {conversion ? <li>Conversion Options: {conversion}</li> : null}
                {cylinders ? <li>Cylinders: {cylinders}</li> : null}
                {natAsp ? <li>Naturally Aspirated: {natAsp}</li> : null}
                {aspir ? <li>Aspiration: {aspir}</li> : null}
                {aspirO ? <li>Aspiration Options: {aspirO}</li> : null}
              </ul>
            </div>
          </div>

          <div className="tunes"></div>
        </motion.div>
      ) : (
        <motion.div
          onClick={() => setOpen(true)}
          className="car"
          layoutId="expandable-card"
        >
          <motion.h2 layoutId="expandable-card-h">
            {year} {make} {model}
          </motion.h2>
          <img
            className="logo"
            src={"./manu/" + make.toLowerCase().replace(/ /g, "") + "-logo.png"}
            alt={make + " logo"}
          />
          <ul className="mini-stats">
            <li>{nickname}</li>
            <li>Class: {grade}</li>
            <li>Type: {type}</li>
          </ul>
        </motion.div>
      )}
    </AnimateSharedLayout>
  );
};

export default Car;
