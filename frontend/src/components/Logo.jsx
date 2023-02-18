import React from "react";

function Logo() {
  const Remove = () => {
    window.localStorage.clear();
  };
  return (
    <div onClick={Remove}>
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQUAAADBCAMAAADxRlW1AAAAe1BMVEX///8AAABLS0v8/Pze3t7l5eXr6+vX19f5+fn09PSwsLA4ODjh4eFnZ2cxMTHHx8e5ublwcHCRkZGqqqp/f3+ioqIQEBB2dnZTU1MrKyvOzs6KiopYWFjJycleXl49PT0kJCSampoZGRlERES/v78XFxdMTEyPj499fX3LC7FYAAAE0UlEQVR4nO2caVfyQAyFHdldcUHcBXH7/7/wxQ0hbelc4zSZvvf56Dk9ZpICtzdJd3YIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCyC8Z71lHYE/3JYSRdRDGjKZhyZt1GLZMwidd60AMOZ59JSHsWodiRu8y/PBkHY0No/OwzoV1PCacBcHcOqLmubuSSQihbx1Uw/RuizkI4dA6rEYZ3pTlYMnAOrIGKXwhrNi3Dq0xro8qkxDCf/I40TvckoMlHesAG6BT9YWw4sY6xPTs1eVgSc86yMRc70ckIdxah5mUfs0Xwopj60gTchqZgxBm1qEmYxydgyUT62gTMUeS0FrzrYNl4cQ63kTE/ESu0VbzbQFlYWEdbiIG2M0wto43ESdYGqzDTcQIy8KpdbyJmGNpaKv5Nqs/+hr31uEm4gm7Ga6t403EZf3R1ziyDjcRB9jNcGYdbyLO64++ztA63jQMsSycW8ebiGoLvpQD63gTEeW5rbi0DjcR19jN0FbzLdZ8/OTROtw/oi86j33sZmhHL39SED/xLuwHLTDfPmaWhPjpXEBZyN58O/hSzEL8QHZ07r384UooSvGDmW8PJtH/Eev6SIifLnYz5NvL35xZkuJniqUh015+YWZJDDKC5luWvfxh8clRip9JyVm3kKH5Vtp/keKn5eZb1cySED932M1wZ3OYX9K/rzqHFD+l046VXJmc5ndsnVkS4qcHZSGjXv72hqwUP7VTXptk8jgx2DbE+I4QP6D5lsUiTczMkhA/revld15jziHFD2a+uV+kGUc+KwvxA/byfS/SDB5izyEHGTHz7dnkdHH0kbEEIX5aY75hX3FS/MyxNLh9nFB2Hh+hq/0u0ujET1t6+eAgoxQ/L9DVfhdpdOKnNeZb9A/lB1L8vGFpcNvL14mf1phvOvED9vLdLtIoxU/Jhu0W/C7SzLE0CPEDmm9+e/k68VPp0pUyMzhfHDrxA36i/JpvOvET5U784NZ804kfUH9Obc4YASh+hPnWll4+6KVK8YPpT7+LNDrx05pFmjojfhMpfrBFmgu3vXzdIGOmizSjqRzN0ImfOZYGH+bb+wCCKKdS/GC9fA/m2+dLx2birzrxk5v59j3AJ8up3CLOapFmfV5HlFMnfnJapNnQBVLL6sRPNos08qVjwkvViZ9MFml6hR9D6aWC4kdcncMiTckAX6GcoPh5Ff8C058vjR39h/JCyXLOsTQI8eN9kabypWNSy+rED2Znz5o5+zfVA3yFch5D51Cab0328re/dEyWUyd+3C7S1DUiRTmV4sfnIk39S8dkOXXix6P5FvXSMVFOpfjxt0gT+SkV5dSJH9DOTm6+Rd+cspyY+HG9SDMAbk3hpYLix28vHxrgK5RTt0UMLtIk7OWD4kdnvvldpNGVUyd+dPrzL1GWUyd+/CzS6MqpEz/gIk1C8025FK4TP34WaXTlbLSXn3KRRldOnfjxs0ij81KV4sfPIo2unLotYj+LNEovVSd+/CzS6Mqp2yIGBUvKXr6unDrxAwqWhL18UMuKciq3iJ+hq1P28nXlbHSRJqH5pisnaL7J5i82S5qyl3+62AVYSC/1Abl6X1gFXexq32unhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIQD/APwcRnUXw+K5AAAAAElFTkSuQmCC"
        alt=""
        className="logo"
      />
    </div>
  );
}

export default Logo;
