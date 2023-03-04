export default function  DescriptionItem({ title, content }) {
    return (
        <div className="site-description-item-profile-wrapper">
            <p className="site-description-item-profile-p-label">{title}: {content}</p>
        </div>
    );
}