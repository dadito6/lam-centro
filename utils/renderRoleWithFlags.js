// src/utils/renderRoleWithFlags.js
import React from "react";
import ReactCountryFlag from "react-country-flag";

export const renderRoleWithFlags = (roleText) => {
  // Mapeo de emoji a código ISO
  const flagMap = {
    "🇦🇷": "AR",
    "🇬🇧": "GB",
    "🇪🇸": "ES",
    "🇺🇸": "US",
  };

  // Regex para detectar los emojis de bandera
  const flagRegex = /🇦🇷|🇬🇧|🇪🇸|🇺🇸/g;

  // Separamos el texto por los emojis
  const parts = roleText.split(flagRegex);
  // Obtenemos los emojis detectados en orden
  const matches = roleText.match(flagRegex) || [];

  // Intercalamos el texto y los componentes de bandera
  const result = [];
  for (let i = 0; i < parts.length; i++) {
    result.push(parts[i]);
    if (i < matches.length) {
      const countryCode = flagMap[matches[i]];
      result.push(
        <ReactCountryFlag
          key={`flag-${i}`}
          countryCode={countryCode}
          svg
          style={{
            width: "1em",
            height: "1em",
            verticalAlign: "middle",
            margin: "0 0.25em",
          }}
          title={countryCode}
        />
      );
    }
  }
  return result;
};
