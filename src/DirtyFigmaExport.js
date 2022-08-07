export function Underlay() {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        padding: 40,
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        pointerEvents: "none",
      }}>
      <div style={{ width: "100%", padding: 0, display: "inline-flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
        <p
          style={{
            fontFamily: "'Antonio', sans-serif",
            flex: "1 1 0%",
            height: 30,
            fontSize: 30,
            fontWeight: "700",
            lineHeight: "30px",
            letterSpacing: -2,
          }}>
          Developer & Designer
        </p>
        <div style={{ flex: "1 1 0%", display: "flex", gap: "2em" }}></div>
        <p style={{ flex: "1 1 0%", height: 30, fontSize: 30, lineHeight: "30px", textAlign: "right" }}>⎑</p>
      </div>
      <div style={{ height: 60 }} />
      <div style={{ width: "100%", padding: 0, display: "inline-flex", flexDirection: "row", alignItems: "flex-start", justifyContent: "center" }}>
        <p style={{ flex: "1 1 0%", height: "100%", fontSize: 12, lineHeight: "1.5em" }}>
          Letting the inner creativity shine
          <br />
          <b>—</b>
        </p>
        <div style={{ width: 10 }} />
        <p
          style={{
            transform: "rotate3d(0, 0, 1, 90deg) translate3d(100%,10px,0)",
            transformOrigin: "right",
            fontSize: 12,
            fontWeight: "700",
            lineHeight: "100%",
            textAlign: "right",
            whiteSpace: "nowrap",
          }}>
          DRAG POINTER &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ●
        </p>
      </div>
      <div style={{ height: 10 }} />
      <div
        className="full"
        style={{
          fontFamily: "'Antonio', sans-serif",
          width: "100%",
          flex: "1 1 0%",
          padding: 0,
          display: "inline-flex",
          flexDirection: "row",
          alignItems: "flex-end",
          justifyContent: "center",
        }}>
        <p style={{ flex: "1 1 0%", fontSize: 250, lineHeight: "1em", margin: 0, letterSpacing: -10 }}>AG</p>
        <div style={{ width: 10 }} />
        <p style={{ flex: "1 1 0%", fontSize: 250, lineHeight: "100%", textAlign: "right", margin: 0, letterSpacing: -10 }}>⸙𓁁</p>
      </div>
      <div style={{ height: 60 }} />
      <div
        style={{
          pointerEvents: "all",
          pointer: "auto",
          width: "100%",
          padding: 0,
          display: "inline-flex",
          flexDirection: "row",
          alignItems: "flex-end",
          justifyContent: "center",
        }}>
        <p className="full" style={{ whiteSpace: "nowrap", flex: "1 1 0%", fontSize: 12, lineHeight: "1.5em" }}>
          <b>Anmolgupta</b>
          <br />
          anmolgupta.ag33@gmail.com
        </p>
        <div style={{ width: 10 }} />
        <div style={{ width: 10 }} />
        <p className="full" style={{ flex: "1 1 0%", fontSize: 12, lineHeight: "1em", textAlign: "right" }}></p>
      </div>
    </div>
  )
}

export function Overlay() {
  return (
    <div className=" absolute bottom-10 right-10">
      <p style={{ flex: "1 1 0%", color: "white", fontSize: 12, lineHeight: "1em", textAlign: "right" }}>
        <a style={{ color: "white" }} href="http://pmnd.rs/">
          About Me
        </a>{" "}
        <a style={{ color: "white" }} href="https://codesandbox.io/s/zxpv7">
          Contact
        </a>
      </p>
    </div>
  )
}
