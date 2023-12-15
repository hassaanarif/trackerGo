import { memo } from "react";

const TestComponent = memo(function TestComponent() {
	console.log("Test Component Rendered");
	return <div>TestComponent</div>;
});

export default TestComponent;
