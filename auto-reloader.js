const targetX = 180; // X coordinate for the click (change as needed)
    const targetY = 115; // Y coordinate for the click (change as needed)

    function autoReloadAndClick() {
        // Click on the specific coordinates
        const event = new MouseEvent('click', {
            clientX: targetX,
            clientY: targetY,
            bubbles: true,
            cancelable: true,
        });
        document.elementFromPoint(targetX, targetY)?.dispatchEvent(event);
    }

    // Reload the page every 5 seconds
    setInterval(() => {
        location.reload();
    }, 5000);

    // Call the click function after the page loads
    window.onload = autoReloadAndClick;
