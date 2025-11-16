import "mocha";
import { expect } from "chai";
import Point from "../src/Point";
import LineString from "../src/LineString";
import LogGeometryVisitor from "../src/LogGeometryVisitor";


describe("test LogGeometryVisitor", () => {


    it("should work with empty Point", () => {
        let result = "";
        const visitor = new LogGeometryVisitor((message) => { result = message;
        });
        const geometry = new Point();
        geometry.accept(visitor);

        expect(result).to.equal("Je suis un point vide");


    });

        it("test with LogGeometryVisitor for Point", () => {
            let result = "";
            const visitor = new LogGeometryVisitor((message) => { result = message;
            });
            const geometry = new Point([2.0,3.0]);
            geometry.accept(visitor);

            expect(result).to.equal("Je suis un point avec x=2 et y=3");


    });
         it("test with LogGeometryVisitor for LineString void", () => {
            let result = "";
            const visitor = new LogGeometryVisitor((message) => { result = message;
            });
            const geometry = new LineString()
            geometry.accept(visitor);

            expect(result).to.equal("Je suis une polyligne vide");

    });

    it("test with LogGeometryVisitor for LineString", () => {
        let result = "";
        const visitor = new LogGeometryVisitor((message) => { result = message;
        });
        const geometry1 = new Point([2.0,3.0]);
        const geometry2 = new Point([2.0,3.0]);
        const geometry = new LineString([geometry1, geometry2])
        geometry.accept(visitor);

        expect(result).to.equal("Je suis une polyligne définie par 2 points");

    });

});
