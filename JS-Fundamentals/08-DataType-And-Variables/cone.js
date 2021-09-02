function cone(radius, height) {
    let volume = Math.PI * Math.pow(radius, 2) * height / 3;
    let l = Math.sqrt(Math.pow(radius, 2) + Math.pow(height, 2));
    let area = Math.PI * Math.pow(radius, 2) + Math.PI * radius * l;
    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${area.toFixed(4)}`);
}