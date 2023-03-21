async function hello(word, ticks) {
    for (i=0; i<ticks*100000000; i++)
        ;
    console.log(word);
}

hello('corinthians', 5)
hello('Marília', 10)