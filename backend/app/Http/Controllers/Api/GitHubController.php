<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Http;

class GitHubController extends Controller
{
    /**
     * Get GitHub repositories for the user
     * 
     * Note: This requires a GitHub token for authenticated requests
     * You can get a token from: https://github.com/settings/tokens
     * Add it to .env as GITHUB_TOKEN
     */
    public function repositories(): JsonResponse
    {
        $username = 'Mateo9804';
        $token = env('GITHUB_TOKEN'); // Optional: for higher rate limits
        
        $url = "https://api.github.com/users/{$username}/repos";
        
        $headers = [
            'Accept' => 'application/vnd.github.v3+json',
            'User-Agent' => 'Portfolio-API'
        ];
        
        if ($token) {
            $headers['Authorization'] = "token {$token}";
        }
        
        try {
            $response = Http::withHeaders($headers)->get($url);
            
            if ($response->successful()) {
                $repos = $response->json();
                
                // Format repositories for portfolio
                $formattedRepos = array_map(function ($repo) {
                    return [
                        'id' => $repo['id'],
                        'title' => $repo['name'],
                        'description' => $repo['description'] ?? 'Sin descripción',
                        'github' => $repo['html_url'],
                        'language' => $repo['language'] ?? 'Sin especificar',
                        'stars' => $repo['stargazers_count'],
                        'forks' => $repo['forks_count'],
                        'updated_at' => $repo['updated_at'],
                    ];
                }, $repos);
                
                return response()->json($formattedRepos);
            }
            
            return response()->json(['error' => 'Error al obtener repositorios'], 500);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
}

