<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\PortfolioController;
use App\Http\Controllers\Api\ContactController;
use App\Http\Controllers\Api\GitHubController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
*/

Route::middleware(['cors'])->group(function () {
    // Portfolio data endpoints
    Route::get('/portfolio', [PortfolioController::class, 'index']);
    Route::get('/portfolio/about', [PortfolioController::class, 'about']);
    Route::get('/portfolio/projects', [PortfolioController::class, 'projects']);
    Route::get('/portfolio/skills', [PortfolioController::class, 'skills']);
    
    // Contact endpoint
    Route::post('/contact', [ContactController::class, 'send']);
    
    // GitHub repositories endpoint (optional - requires GITHUB_TOKEN in .env for better rate limits)
    // Route::get('/github/repositories', [GitHubController::class, 'repositories']);
});

