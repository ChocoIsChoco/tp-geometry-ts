import "mocha";
import { expect } from "chai";
import Point from "../src/Point";

describe("test Point", () => {
    it("test default constructor", () => {
        const p = new Point();
        expect(p.getCoordinate()).to.deep.equal([]);
        expect(Number.isNaN(p.x()));
        expect(Number.isNaN(p.y()));
        expect(p.getType()).to.equal("Point")
        expect(p.isEmpty()).to.be.true
    });
    it("test constructor with coordinates", () => {
        const p = new Point([3.0, 4.0]);
        expect(p.getCoordinate()).to.deep.equal([3.0, 4.0]);
        expect(p.x()).to.equal(3.0);
        expect(p.y()).to.equal(4.0);
        expect(p.isEmpty()).to.be.false;
    });

    it("should translate point", () => {
        const p = new Point([3.0, 4.0]);
        p.translate(1.0, 2.0);
        expect(p.getCoordinate()).to.deep.equal([4.0, 6.0])
    });

    it("should clone point", () => {
        const p = new Point([3.0, 4.0]);
        const q = p.clone();
        expect(p).to.deep.equal(q)
    });

    it("test constructor with getEnvelope for point ", () => {
        {
            const p = new Point();
            expect(p.getEnvelope().isEmpty()).to.be.true;
        }
        {
            const p = new Point([3.0, 4.0]);
            const env = p.getEnvelope();
            expect(env.toString()).to.deep.equal('Envelope[(3,4), (3,4)]');
        }
    });


});
