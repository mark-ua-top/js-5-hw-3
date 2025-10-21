const Statistics = ({ title, stats }) => (
    <section className="statistics">
        {title && <h2 className="title">{title}</h2>}
        <ul className="stat-list">
            {stats.map(({ id, label, percentage }) => (
                <li key={id} className="item" style={{ backgroundColor: getRandomColor() }}>
                    <span className="label">{label}</span>
                    <span className="percentage">{percentage}%</span>
                </li>
            ))}
        </ul>
    </section>
);

const getRandomColor = () => ["#9154dbff", "#67c5f0ff", "#3cd3beff", "#ffa264ff"][Math.floor(Math.random() * 4)];

export default Statistics;
