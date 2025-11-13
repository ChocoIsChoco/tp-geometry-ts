import "mocha";
import { expect } from "chai";
import LineString from "../src/LineString";
import Point from "../src/Point";

describe("test LineString", () => {
    it("test default constructor", () => {
        const g = new LineString();
        expect(g.getType()).to.equal("LineString")
        expect(g.getNumPoints()).to.equal(0);
        expect(g.isEmpty()).to.be.true
    });
    it("test constructor with Point", () => {
        const a = new Point([3.0, 4.0])
        const b = new Point([7.0, 8.0])
        const l = new LineString([a, b]);
        expect(l.getNumPoints()).to.deep.equal(2);
        expect(l.getPointN(0)).to.deep.equal(a);
        expect(l.getPointN(1)).to.deep.equal(b);
        expect(l.isEmpty()).to.be.false;

    });

    it("should translate point", () => {
        const a = new Point([3.0, 4.0])
        const b = new Point([7.0, 8.0])
        const c = new Point([4.0, 6.0])
        const l = new LineString([a, b]);
        l.translate(1.0, 2.0);
        expect(l.getPointN(0)).to.deep.equal(a);
    });

    it("should clone point", () => {
        const a = new Point([3.0, 4.0]);
        const b = new Point([4.0, 5.0]);
        const l = new LineString([a,b])
        const t = l.clone();
        expect(l).to.deep.equal(t);
    })
});

