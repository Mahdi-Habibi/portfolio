import ImageOrFallback from "./ImageOrFallback";

export default function CasePreviewPanel({ preview }) {
    if (!preview) return null;

    return (
        <div
            className="case-preview-float"
            style={{ left: preview.x, top: preview.y }}
            aria-hidden="true"
        >
            <div className="case-preview-float-media">
                <ImageOrFallback
                    src={preview.image}
                    alt=""
                    className="case-preview-float-image"
                    fallbackText={preview.index}
                />
            </div>
            <div className="case-preview-float-body">
                <span className="case-preview-float-index">{preview.index}</span>
                <p className="case-preview-float-title">{preview.title}</p>
                <p className="case-preview-float-result">{preview.result}</p>
            </div>
        </div>
    );
}
