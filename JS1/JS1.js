for (let i=1; i <= 10; i++) {
    document.write("Produtos de ");
    document.write(i);
    document.write("<br>");
    for (let j=1; j <= 10; j++) {
        document.write(i);
        document.write("x");
        document.write(j);
        document.write(" = ");
        document.write(i*j);
        document.write("<br>");
    }
    document.write("<br>");
}