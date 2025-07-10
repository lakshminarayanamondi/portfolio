const Skills = () => {
  const skills = [
    { name: "Python", icon: "🐍", level: 90 },
    { name: "Java", icon: "☕", level: 85 },
    { name: "Machine Learning", icon: "🤖", level: 88 },
    { name: "TensorFlow", icon: "🧠", level: 82 },
    { name: "Scikit-learn", icon: "📊", level: 87 },
    { name: "HTML/CSS", icon: "🌐", level: 85 },
    { name: "JavaScript", icon: "⚡", level: 75 },
    { name: "Data Analysis", icon: "📈", level: 90 },
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 gradient-text">
          Technical Skills
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={skill.name}
              className="glass-card p-6 hover-lift text-center group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <h3 className="text-lg font-semibold mb-3">{skill.name}</h3>
              <div className="w-full bg-secondary/30 rounded-full h-2 mb-2">
                <div 
                  className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
              <span className="text-sm text-muted-foreground">{skill.level}%</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;