describe("App", function(){
    describe("Book Model",function(){
        it("saves instances",function(){
            var b = new Book();
            spyOn($,'ajax');
            b.save();
            expect($.ajax).toHaveBeenCalled();
        });
    });

    describe("Book Collection",function(){
        var books;
        beforeEach(function(){
            books = new Books();
        });

        it("saves new books",function(){
            spyOn($,'ajax');
            books.create({});
            expect($.ajax).toHaveBeenCalled
        })

        it("sorts books correctly",function(){
            books.add({ year : 2011 , title : "C"});
            books.add({ year : 2010 , title : "A"});
            books.add({ year : 2011 , title : "B"});

            expect(books.pluck('year')).toEqual([2010,2011,2011]);
            expect(books.pluck('title')).toEqual(["A","B","C"]);
        });
    });

    describe("Book View",function(){
        it("renders books",function(){
            var bv = new BookView({ model : new Book({ title : "title" })});
            bv.render();
            expect(bv.el.innerHTML).toMatch('<p>title</p>');
        });
    });

    describe("Books View",function(){
        var collection = new Books([{ title : "title 1"},{ title : "title 2"}]),
            booksView = new BooksView({ collection : collection });
        beforeEach(function(){
            booksView.render();
        });

        it("renders books"),function(){
            var html = booksView.el.innerHTML;
            expect(html).toMatch("2 Books");
            expect(html).toMatch("title 1");
            expect(html).toMatch("title 2");
        }

        it("re-renders when books are added",function(){
            collection.add({ title: "title 3"});
            expect(booksView.el.innerHTML).toMatch("title 3");
        })
    })
});