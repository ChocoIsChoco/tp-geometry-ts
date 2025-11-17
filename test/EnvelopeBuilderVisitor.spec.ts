import "mocha";
import { expect } from "chai";
import Point from "../src/Point";
import LineString from "../src/LineString";
import EnvelopeBuilder from "../src/EnvelopeBuilder";

describe("EnvelopeBuilder as GeometryVisitor", () => {
    it("should build envelope from p", () => {
        const builder = new EnvelopeBuilder();
        const p = new Point([2.0, 3.0]);
        
        p.accept(builder);
        const envelope = builder.build();
        
        expect(envelope.getXmin()).to.equal(2.0);
        expect(envelope.getYmin()).to.equal(3.0);
        expect(envelope.getXmax()).to.equal(2.0);
        expect(envelope.getYmax()).to.equal(3.0);
    });

    it("should build envelope from LineString", () => {
        const builder = new EnvelopeBuilder();
        const p1 = new Point([1.0, 2.0]);
        const p2 = new Point([3.0, 4.0]);
        const lineString = new LineString([p1, p2]);
        
        lineString.accept(builder);
        const envelope = builder.build();
        
        expect(envelope.getXmin()).to.equal(1.0);
        expect(envelope.getYmin()).to.equal(2.0);
        expect(envelope.getXmax()).to.equal(3.0);
        expect(envelope.getYmax()).to.equal(4.0);
    });

    it("should return empty envelope for empty geometry", () => {
        const builder = new EnvelopeBuilder();
        const p = new Point();
        
        p.accept(builder);
        const envelope = builder.build();
        
        expect(envelope.isEmpty()).to.be.true;
    });
});