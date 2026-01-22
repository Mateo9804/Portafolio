<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;

class PortfolioController extends Controller
{
    /**
     * Get all portfolio data
     */
    public function index(): JsonResponse
    {
        return response()->json([
            'name' => 'Mateo Alejandro Vera',
            'title' => 'Desarrollador de aplicaciones web',
            'location' => 'Monóvar, Alicante, España',
            'email' => 'mateovera9804@gmail.com',
            'phone' => '(+34) 611736130',
            'address' => 'ExConvento 10, 3°C, 03640, Monóvar, Alicante, España',
            'nationality' => 'Argentina, Italiana',
            'linkedin' => 'https://www.linkedin.com/in/mateo-alejandro-vera-0a656b374/',
            'github' => 'https://github.com/Mateo9804',
            'summary' => 'Desarrollador de aplicaciones web apasionado por crear soluciones innovadoras con tecnologías modernas.',
        ]);
    }

    /**
     * Get about information
     */
    public function about(): JsonResponse
    {
        return response()->json([
            'description' => 'Insertarme en el mundo laboral, donde pueda dar mis primeros pasos en una empresa consolidada en el área de mis estudios académicos, y poner a prueba mis talentos y capacidades para crecer profesionalmente, y así retribuir con éxito la fe depositada en mi persona. Dispuesto a aprender nuevos lenguajes de programación, si así me lo solicitaran, para ampliar mis conocimientos actuales y volcarlos en beneficio de la empresa para así lograr sus objetivos.',
            'education' => [
                [
                    'degree' => 'Ciclo Formativo de Grado Superior, Desarrollo de aplicaciones web',
                    'institution' => 'IES Enric Valor',
                    'period' => 'Septiembre 2023 - Junio 2026',
                    'website' => 'https://www.iesenricvalor.es/web/va/Index.aspx'
                ],
                [
                    'degree' => 'Bachillerato',
                    'institution' => 'Colegio San Cayetano',
                    'location' => 'San Isidro, Argentina',
                    'period' => '23/03/2016 – 17/12/2021',
                    'website' => 'https://sancayetanova.edu.ar',
                    'mec_level' => 'Nivel 4 FOF-MEC'
                ]
            ],
            'experience' => [
                [
                    'position' => 'Desarrollador de aplicaciones web',
                    'company' => 'Freelance',
                    'period' => 'Julio 2025 - Presente',
                    'location' => 'Monóvar, Alicante, España',
                    'description' => 'Páginas para clientes',
                    'skills' => ['Java', 'Laravel', 'HTML5']
                ],
                [
                    'position' => 'Desarrollador de aplicaciones web',
                    'company' => 'NeoFranquicias SL',
                    'employment_type' => 'Jornada completa',
                    'period' => 'Marzo 2025',
                    'skills' => ['Laravel', 'JavaScript']
                ]
            ]
        ]);
    }

    /**
     * Get projects
     */
    public function projects(): JsonResponse
    {
        return response()->json([
            [
                'id' => 1,
                'title' => 'JobBridge',
                'description' => 'Plataforma digital especializada en conectar a desarrolladores y programadores con empresas que buscan talento tecnológico.',
                'technologies' => ['JavaScript', 'React.js', 'HTML', 'CSS', 'Bootstrap', 'Laravel', 'PHP', 'Docker', 'Railway', 'Vercel'],
                'image' => '/images/jobbridge.jpg',
                'github' => 'https://github.com/Mateo9804/JobBridge',
                'demo' => 'https://job-bridge-alpha.vercel.app'
            ],
            [
                'id' => 2,
                'title' => 'ZetaCuts',
                'description' => 'Plataforma digital completa para la gestión de una barbería que permite agendar citas, vender productos y administrar usuarios.',
                'technologies' => ['React.js', 'HTML', 'CSS', 'JavaScript', 'PHP', 'Docker', 'Laravel', 'Render'],
                'image' => '/images/zetacuts.jpg',
                'github' => 'https://github.com/Proyectos-completos/ZetaCuts',
                'demo' => 'https://zetacuts-frontend-hdqr.onrender.com/'
            ],
            [
                'id' => 3,
                'title' => 'Angax',
                'description' => 'Red social fitness para el seguimiento del entrenamiento. Desarrollé el frontend y parte del backend (progreso y entrenadores). Incluye rutinas compartidas y chatbot inteligente.',
                'technologies' => ['React.js', 'HTML', 'CSS', 'JavaScript', 'PHP', 'Docker', 'Laravel', 'Render'],
                'image' => '/images/angax.jpg',
                'github' => 'https://github.com/Angelation/Angax',
                'demo' => 'https://angax-frontend.onrender.com/'
            ],
            [
                'id' => 4,
                'title' => 'Portafolio Personal',
                'description' => 'Portafolio web personal desarrollado con React y Laravel, mostrando proyectos y habilidades.',
                'technologies' => ['React', 'Laravel', 'PHP', 'Bootstrap', 'CSS'],
                'image' => '/images/portfolio.jpg',
                'github' => 'https://github.com/Mateo9804',
                'demo' => null
            ]
        ]);
    }

    /**
     * Get skills
     */
    public function skills(): JsonResponse
    {
        return response()->json([
            'frontend' => [
                ['name' => 'React', 'level' => 90],
                ['name' => 'JavaScript', 'level' => 85],
                ['name' => 'HTML5', 'level' => 95],
                ['name' => 'CSS3', 'level' => 90],
                ['name' => 'Bootstrap', 'level' => 85],
            ],
            'backend' => [
                ['name' => 'PHP', 'level' => 90],
                ['name' => 'Laravel', 'level' => 85],
                ['name' => 'Java', 'level' => 80],
                ['name' => 'MySQL', 'level' => 80],
                ['name' => 'RESTful API', 'level' => 85],
            ],
            'tools' => [
                ['name' => 'Git', 'level' => 85],
                ['name' => 'Docker', 'level' => 70],
                ['name' => 'Postman', 'level' => 80],
            ]
        ]);
    }
}

