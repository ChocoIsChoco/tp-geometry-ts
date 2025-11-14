import "mocha";
import { expect } from "chai";
import LineString from "../src/LineString";
import Point from "../src/Point";
import EnvelopeBuilder from "../src/EnvelopeBuilder";

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
        expect(l.getPointN(0)).to.deep.equal(c);
    });

    it("should clone point", () => {
        const a = new Point([3.0, 4.0]);
        const b = new Point([4.0, 5.0]);
        const l = new LineString([a, b])
        const t = l.clone();
        expect(l).to.deep.equal(t);
    });

    it("test constructor with getEnvelope for LineString ", () => {
            {
                const p = new Point([]);
                const q = new Point([]);
                const pq = new LineString([p,q])
                expect(p.getEnvelope().isEmpty()).to.be.true;
            }
            {
                const p = new Point([3.0, 4.0]);
                const q = new Point([0.0, 2.0]);
                const pq = new LineString([p,q])
                const env = pq.getEnvelope();
                expect(env.toString()).to.deep.equal('Envelope[(0,2), (3,4)]');
            }
        });
});

