import React from "react";
import ReactDOM from "react-dom/client";
import { Flash } from "react-ruffle";

// Bundled SWF served by Vite from `public/`. Swap for any SWF — local
// or remote — by changing this constant.
const SWF = "/demo.swf";

function App() {
	return (
		<>
			<h1>react-ruffle</h1>
			<p style={{ marginTop: 0, color: "#fdba74" }}>Flash content, rendered by Ruffle, inside React.</p>
			<div className="stage">
				<Flash src={SWF} style={{ width: 400, height: 400 }}>
					<p style={{ padding: "2rem", color: "#fed7aa" }}>Loading Flash content…</p>
				</Flash>
			</div>
		</>
	);
}

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);
